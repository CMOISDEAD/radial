import { Textarea } from "@nextui-org/react";
import { Comment } from "./Comment";

export const CommentSection = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <Textarea
        label="Comment"
        placeholder="Leave a comment..."
        size="sm"
        variant="flat"
      />
      {[1, 2, 3].map((i) => (
        <Comment key={i} />
      ))}
      <div className="flex w-full justify-center items-center mt-2">
        <p className="text-xs text-gray-600 font-mediumhover:underline hover:text-primary transition-colors cursor-pointer w-fit">
          See more comments
        </p>
      </div>
    </div>
  );
};
