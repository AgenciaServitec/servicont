import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonAvatar() {
  return (
    <div className="flex items-center space-x-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[160px]" />
      </div>
    </div>
  );
}
