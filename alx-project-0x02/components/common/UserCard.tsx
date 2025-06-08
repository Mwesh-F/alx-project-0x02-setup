import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-700 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Address:</strong> {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;

