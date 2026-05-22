import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type SkinType = "dry" | "oily" | "mixed" | "sensitive" | null;
export type SkinConcern =
  | "hydration"
  | "anti_aging"
  | "acne"
  | "spots"
  | null;

export interface AuraskinUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  gender: "female" | "male" | "other" | null;
  birthDate: string; // ISO date string
  skinType: SkinType;
  skinConcern: SkinConcern;
  plan: "mensual" | "trimestral" | "semestral" | null;
}

interface AuthState {
  user: AuraskinUser | null;
  isAuthenticated: boolean;
  onboardingCompleted: boolean;

  // ── Actions ──────────────────────────────────
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, lastName: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  completeOnboarding: (data: {
    gender: AuraskinUser["gender"];
    birthDate: string;
    skinType: SkinType;
    skinConcern: SkinConcern;
  }) => void;
  logout: () => void;
  updateUser: (data: Partial<AuraskinUser>) => void;
}

// ─────────────────────────────────────────────
// Helpers — simulated async auth
// ─────────────────────────────────────────────

/** Returns a fake stored "accounts" list from localStorage */
function getAccounts(): Record<string, { password: string; user: AuraskinUser }> {
  try {
    return JSON.parse(localStorage.getItem("auraskin_accounts") ?? "{}");
  } catch {
    return {};
  }
}

function saveAccounts(
  accounts: Record<string, { password: string; user: AuraskinUser }>
) {
  localStorage.setItem("auraskin_accounts", JSON.stringify(accounts));
}

function generateId(): string {
  return `usr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// ─────────────────────────────────────────────
// Store
// ─────────────────────────────────────────────

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      onboardingCompleted: false,

      // ── Login ─────────────────────────────────
      login: async (email, password) => {
        const accounts = getAccounts();
        const record = accounts[email.toLowerCase()];

        if (!record) {
          return { ok: false, error: "No existe una cuenta con ese correo electrónico." };
        }
        if (record.password !== password) {
          return { ok: false, error: "La contraseña es incorrecta." };
        }

        set({
          user: record.user,
          isAuthenticated: true,
          // Onboarding is complete if skin data was already filled
          onboardingCompleted: !!record.user.skinType,
        });
        return { ok: true };
      },

      // ── Register ──────────────────────────────
      register: async (name, lastName, email, password) => {
        const accounts = getAccounts();

        if (accounts[email.toLowerCase()]) {
          return { ok: false, error: "Ya existe una cuenta con ese correo electrónico." };
        }

        const newUser: AuraskinUser = {
          id: generateId(),
          name,
          lastName,
          email: email.toLowerCase(),
          gender: null,
          birthDate: "",
          skinType: null,
          skinConcern: null,
          plan: null,
        };

        accounts[email.toLowerCase()] = { password, user: newUser };
        saveAccounts(accounts);

        set({
          user: newUser,
          isAuthenticated: true,
          onboardingCompleted: false,
        });
        return { ok: true };
      },

      // ── Complete Onboarding ────────────────────
      completeOnboarding: ({ gender, birthDate, skinType, skinConcern }) => {
        const { user } = get();
        if (!user) return;

        const updated: AuraskinUser = {
          ...user,
          gender,
          birthDate,
          skinType,
          skinConcern,
        };

        // Persist updated user in fake accounts too
        const accounts = getAccounts();
        if (accounts[user.email]) {
          accounts[user.email].user = updated;
          saveAccounts(accounts);
        }

        set({ user: updated, onboardingCompleted: true });
      },

      // ── Logout ────────────────────────────────
      logout: () => {
        set({ user: null, isAuthenticated: false, onboardingCompleted: false });
      },

      // ── Update User ───────────────────────────
      updateUser: (data) => {
        const { user } = get();
        if (!user) return;
        const updated = { ...user, ...data };

        const accounts = getAccounts();
        if (accounts[user.email]) {
          accounts[user.email].user = updated;
          saveAccounts(accounts);
        }
        set({ user: updated });
      },
    }),
    {
      name: "auraskin_auth", // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist these fields (not transient state)
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        onboardingCompleted: state.onboardingCompleted,
      }),
    }
  )
);
