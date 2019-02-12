import { Member, createDefaultMember } from "../model/member";
import { Login, createDefaultLogin } from "../model/login";

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data: any): Promise<Member[]> => {
  const members = data.map(gitHubMember => {
    var member: Member = createDefaultMember();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<Member[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};

//-- Prueba

const resolveMember = (data: any): Promise<Member> => {
  debugger;

  var member: Member = createDefaultMember();

  member.id = data.id;
  member.login = data.login;
  member.avatar_url = data.avatar_url;
  member.html_url = data.html_url;
  member.name = data.name;
  member.created_at = data.created_at;
  member.updated_at = data.updated_at;

  return Promise.resolve(member);
};

export const getMemberByLogin = (login: string): Promise<Member> => {
  debugger;
  const gitHubMemberUrl: string = `https://api.github.com/users/${login}`;

  return fetch(gitHubMemberUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer e32b8ca49f50ae8fd702ab6d495edd0b22fe1b5e"
    }
  })
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMember(data));
};
//----------
