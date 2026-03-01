// Application types matching original Next.js project

export interface MemberNode {
    id: string;
    fullName: string;
    nickname?: string | null;
    gender: "MALE" | "FEMALE";
    birthDate?: string | null;
    deathDate?: string | null;
    isAlive: boolean;
    photo?: string | null;
    phoneWhatsapp?: string | null;
    generation: number;
    fatherId?: string | null;
    motherId?: string | null;
    children?: MemberNode[];
    spouses?: SpouseInfo[];
}

export interface SpouseInfo {
    member: MemberNode;
    marriageDate?: string | null;
    divorceDate?: string | null;
    isActive: boolean;
    marriageOrder: number;
}

export interface TreeData {
    root: MemberNode;
    totalMembers: number;
    totalGenerations: number;
}

export interface BaniStats {
    totalMembers: number;
    totalAlive: number;
    totalDeceased: number;
    totalMale: number;
    totalFemale: number;
    totalGenerations: number;
    totalMarriages: number;
}

export interface ActivityLogEntry {
    id: string;
    action: string;
    entityType: string;
    description: string;
    createdAt: string;
    user: {
        name: string;
        avatar?: string | null;
    };
}

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "USER";
export type UserStatus = "PENDING" | "APPROVED" | "SUSPENDED";
export type BaniUserRole = "ADMIN" | "EDITOR" | "VIEWER";
export type Gender = "MALE" | "FEMALE";
export type CardTheme = "STANDARD" | "CLASSIC" | "GRADIENT" | "GLASS" | "DARK" | "NATURE";
export type TreeOrientation = "VERTICAL" | "HORIZONTAL";
