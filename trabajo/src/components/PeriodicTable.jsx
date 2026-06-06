import { useState } from 'react';
import { elements } from '../data/elements';
import { ElementCell } from './ElementCell';
import { DetailSidebar } from './DetailSidebar';
import '../styles/periodicTable.css';

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState(null);

  const categories = [
'Metales alcalinos',
'Metales alcalinotérreos',
'Metales de transición',
'Metaloides',
'No metales',
'Gases nobles',
'Lantánidos',
'Actínidos',
];

const categoryTranslations = {
  'Metales alcalinos': 'Metales alcalinos',
  'Tierra Alcalina': 'Metales alcalinotérreos',
  'Metales de transición': 'Metales de transición',
  'Metaloides': 'Metaloides',
  'No metales': 'Sin metales',
  'Gases nobles': 'Gases nobles',
  'Lantánidos': 'Lantánidos',
  'Actínidos': 'Actínidos',
};

  const renderGrid = () => {
    const fullElements = elements.filter(e => !e.sub);
    const cells = [];

    for (let r = 1; r <= 7; r++) {
      for (let c = 1; c <= 18; c++) {
        const el = fullElements.find(
          e => e.period === r && e.group === c
        );

        if (el) {
          if (
            filteredCategory === null ||
            el.cat === filteredCategory
          ) {
            cells.push(
              <ElementCell
                key={`${r}-${c}`}
                element={el}
                onSelect={setSelectedElement}
              />
            );
          } else {
            cells.push(<div key={`${r}-${c}`} />);
          }
        } else if (
          r === 6 &&
          c === 3 &&
          (filteredCategory === null ||
            filteredCategory === 'Lanthanides')
        ) {
          cells.push(
            <div
              key={`${r}-${c}`}
              className="element-cell bg-pink-400/5 border border-dashed border-pink-400/20 rounded flex items-center justify-center"
            >
              <span className="text-[10px] text-pink-400/40">
                57-71
              </span>
            </div>
          );
        } else if (
          r === 7 &&
          c === 3 &&
          (filteredCategory === null ||
            filteredCategory === 'Actinides')
        ) {
          cells.push(
            <div
              key={`${r}-${c}`}
              className="element-cell bg-purple-400/5 border border-dashed border-purple-400/20 rounded flex items-center justify-center"
            >
              <span className="text-[10px] text-purple-400/40">
                89-103
              </span>
            </div>
          );
        } else {
          cells.push(<div key={`${r}-${c}`} />);
        }
      }
    }

    return cells;
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Encabezado */}
      <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-6 h-16 z-50">
        <div className="flex items-center gap-8">
          <span className="font-bold text-primary text-xl">
            Tabla Periódica
          </span>
       </div>
         
        </header>
      <main className="pt-16 h-screen flex">
        <div className="flex-1 overflow-auto p-6 pb-32">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            <span className="mr-4 text-on-surface-variant">
              Filtrar:
            </span>

            <button
              onClick={() => setFilteredCategory(null)}
              className={`px-3 py-1 rounded-full border text-xs ${
                filteredCategory === null
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'border-outline-variant/30'
              }`}
            >
              Todos los elementos
            </button>

            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilteredCategory(cat)}
                className={`px-3 py-1 rounded-full border text-xs ${
                  filteredCategory === cat
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'border-outline-variant/30'
                }`}
              >
                {categoryTranslations[cat]}
              </button>
            ))}
          </div>

          {/* Tabla periódica */}
          <div className="periodic-grid min-w-[1200px] mx-auto">
            {renderGrid()}
          </div>
        </div>

        {/* Panel lateral */}
        <DetailSidebar
          selectedElement={selectedElement}
          isVisible={selectedElement !== null}
        />
      </main>
    </div>
  );
}