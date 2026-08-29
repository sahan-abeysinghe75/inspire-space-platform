export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  INSTRUCTOR = 'INSTRUCTOR',
  CONTENT_EDITOR = 'CONTENT_EDITOR',
  STUDENT = 'STUDENT',
}

export const roleHierarchy: Record<Role, number> = {
  [Role.SUPER_ADMIN]: 5,
  [Role.ADMIN]: 4,
  [Role.INSTRUCTOR]: 3,
  [Role.CONTENT_EDITOR]: 2,
  [Role.STUDENT]: 1,
};

export const hasRole = (userRole: Role, requiredRole: Role): boolean => {
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

export const canAccessAdmin = (role: Role): boolean => {
  return hasRole(role, Role.ADMIN);
};

export const canAccessLearning = (role: Role): boolean => {
  return hasRole(role, Role.STUDENT);
};

export const canEditKnowledge = (role: Role): boolean => {
  return hasRole(role, Role.CONTENT_EDITOR);
};

export const ROLE_LABELS: Record<Role, string> = {
  [Role.SUPER_ADMIN]: 'Super Admin',
  [Role.ADMIN]: 'Admin',
  [Role.INSTRUCTOR]: 'Instructor',
  [Role.CONTENT_EDITOR]: 'Content Editor',
  [Role.STUDENT]: 'Student',
};
