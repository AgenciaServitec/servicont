import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonMenu() {
  return (
    <div className="flex items-center space-x-3 w-full mt-6">
      <div className="space-y-3 w-full">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    </div>
  );
}
