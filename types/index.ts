export interface UserSummaryProps {
  user:
    {
        id: number;
        organization: string;
        name: string;
        email: string;
        created_at: string;
        phone: string;
        status: string;
      }
    | undefined;
}