export interface NavItemProps {

    label: string;
    isActive?: boolean;
  }
  
  export interface StatCardProps {
    icon: string;
    label: string;
    value: string;
    subtext?: string;
    percentage?: string;
  }
  
  export interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
  }
  
  export interface TaskItemProps {
    icon: string;
    label: string;
    isCompleted?: boolean;
  }