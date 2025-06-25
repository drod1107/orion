// /types/notification.ts
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
  userId: string;
}

export interface ToastNotification {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}
