import { Button, Divider, Textarea } from "@nextui-org/react";
import { Comment } from "./Comment";
import { useForm } from "react-hook-form";
import { useAppStore } from "../../store/useApp";
import { instance } from "../../api/instance";
import { notify } from "../../utils/notifications";

type CommentType = {
  text: string;
};

export const CommentSection = () => {
  const {
    user,
    selectedPoint: point,
    setSelectedPoint,
  } = useAppStore((state) => state);
  const { register, handleSubmit } = useForm<CommentType>();

  const onSubmit = async (data: CommentType) => {
    if (!user || !point) return;
    try {
      const comment = {
        ...data,
        userId: user.id,
        placeId: point.id,
        date: Date.now(),
      };
      const res = await instance.post("/places/addcomment", comment);
      setSelectedPoint(res.data);
      notify({
        type: "success",
        msg: "Comment successfully added",
      });
    } catch (e) {
      console.error(e);
      notify({
        type: "error",
        msg: "Failed to add comment",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Textarea
          required
          label="Comment"
          placeholder="Leave a comment..."
          size="sm"
          variant="flat"
          {...register("text", { required: true, minLength: 5 })}
        />
        <Button fullWidth variant="flat" color="primary" type="submit">
          Post
        </Button>
      </form>
      <div className="py-1 px-1">
        {point?.comments.length ? (
          <div className="flex flex-col gap-3">
            {point?.comments.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No comments yet. Be the first to comment on this place!
          </p>
        )}
      </div>
      <div className="flex w-full justify-center items-center mt-2">
        <p className="text-xs text-gray-600 font-medium hover:underline hover:text-primary transition-colors cursor-pointer w-fit">
          See more comments
        </p>
      </div>
    </div>
  );
};
