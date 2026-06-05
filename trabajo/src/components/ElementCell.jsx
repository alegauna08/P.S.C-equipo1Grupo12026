import { getCategoryClass } from '../utils/categoryUtils';

export function ElementCell({ element, onSelect }) {
  const colorClasses = getCategoryClass(element.cat);
  
  return (
    <div
      onClick={() => onSelect(element)}
      className={`element-cell ${colorClasses} border rounded p-1.5 flex flex-col justify-between cursor-pointer group hover:brightness-125`}
    >
      <span className="font-atomic-number text-atomic-number opacity-70">
        {element.n}
      </span>
      <span className="font-element-symbol-grid text-element-symbol-grid text-center">
        {element.s}
      </span>
      <span className="text-[8px] text-center truncate opacity-70">
        {element.name}
      </span>
    </div>
  );
}
