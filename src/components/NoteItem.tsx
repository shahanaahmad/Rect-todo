import { FC } from "react";
import AppButton from "./AppButton";
interface Props {
  title?: string;
  description?: string;
  onViewClicked?(): void;
  onEditClick?(): void;
  onDeleteClick?(): void;
}

const NoteItem: FC<Props> = ({
  title,
  onEditClick,
  onDeleteClick,
  onViewClicked,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded p-5 text-left">
      <p className="font-semibold mb-4 text-gray-700 text-lg">{title}</p>
      {description ? <p className="ml-2 py-2 text-lg">{description}</p> : null}
      <div className="space-x-4">
        <AppButton
          title={description ? "Hide" : "View"}
          type="normal"
          onClick={onViewClicked}
        />
        <AppButton onClick={onEditClick} title="Edit" type="regular" />
        <AppButton onClick={onDeleteClick} title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default NoteItem;
