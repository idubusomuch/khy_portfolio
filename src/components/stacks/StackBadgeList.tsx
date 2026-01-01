import Badge from "../ui/Badge";
import { STACK_ICON_MAP } from "../../data/stackIcons";
import type { StackIcon } from "../../data/stackIcons";

type StackKey = StackIcon["key"];

export default function StackBadgeList({ keys }: { keys: StackKey[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {keys.map((key) => {
        const stack = STACK_ICON_MAP[key];
        if (!stack) return null;

        return (
          <li key={stack.key}>
            <Badge className="gap-2 px-3 py-2 text-sm">
              <i className={`${stack.iconClass} text-base`} aria-hidden />
              <span>{stack.label}</span>
            </Badge>
          </li>
        );
      })}
    </ul>
  );
}
