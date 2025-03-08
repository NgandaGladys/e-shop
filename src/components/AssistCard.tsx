import { Card } from "./ui/card";

type Props = {
  icon: string;
  name: string;
  link: string;
};
const AssistCard = ({ icon, name, link }: Props) => {
  return (
    <a href={link}>
      <Card className="flex items-center p-3 rounded-sm gap-2 border-green-700">
        <i className={`${icon} text-green-500`}></i>
        <p>{name}</p>
      </Card>
    </a>
  );
};

export default AssistCard;
