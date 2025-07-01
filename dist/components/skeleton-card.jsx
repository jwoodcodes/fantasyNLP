"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonCard = SkeletonCard;
const skeleton_1 = require("@/components/ui/skeleton");
function SkeletonCard() {
    return (<div className="flex flex-col space-y-2 w-full">
    <div className="w-full flex items-center justify-center">
    <skeleton_1.Skeleton className="h-[28px] w-72 rounded-xl"/>
    </div>
    <skeleton_1.Skeleton className="h-[300px] w-full rounded-xl"/>
      <div className="w-full flex justify-center items-center">
        <skeleton_1.Skeleton className="h-4 w-20"/>
        </div>
      <div className="space-y-2">
        <skeleton_1.Skeleton className="h-4 w-full"/>
        <skeleton_1.Skeleton className="h-4 w-[450px]"/>
      </div>
      <div className="space-y-2">
        <skeleton_1.Skeleton className="h-4 w-full"/>
        <skeleton_1.Skeleton className="h-4 w-[350px]"/>
      </div>
    </div>);
}
