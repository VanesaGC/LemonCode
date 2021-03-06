export interface Member {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export const createDefaultMember = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  html_url: "",
  name: "",
  created_at: "",
  updated_at: "",
});
