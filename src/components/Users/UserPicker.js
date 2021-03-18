import {users} from "../../../../../booking app/src/static.json";

export default function UserPicker () {
  return (
    <select>
      {users.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}