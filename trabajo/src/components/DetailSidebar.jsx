import { getCategoryBgClass } from '../utils/categoryUtils';

export function DetailSidebar({ selectedElement, isVisible }) {
  if (!selectedElement) {
    return (
      <div className={`w-80 lg:w-96 glass-panel border-l border-outline-variant/30 p-panel-padding overflow-y-auto custom-scrollbar transition-all duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-center h-full text-on-surface-variant">
          <p>Seleccione un elemento para ver los detalles</p>
        </div>
      </div>
    );
  }

  const bgClasses = getCategoryBgClass(selectedElement.cat);

  return (
    <div className={`w-80 lg:w-96 glass-panel border-l border-outline-variant/30 p-panel-padding overflow-y-auto custom-scrollbar transition-all duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="space-y-8">
        <div className="flex items-start justify-between">
          <div className={`w-32 h-32 ${bgClasses} rounded-2xl flex items-center justify-center border-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
            <span className="font-display-symbol text-display-symbol">
              {selectedElement.s}
            </span>
          </div>
          <div className="text-right">
            <span className="font-headline-lg text-headline-lg text-primary block">
              {selectedElement.n}
            </span>
            <span className="font-label-caps text-[10px] text-on-primary-fixed-variant bg-primary-container px-2 py-0.5 rounded uppercase">
              {selectedElement.cat}
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {selectedElement.name}
          </h2>
          <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
          Un elemento químico con el símbolo {selectedElement.s} y número atómico {selectedElement.n}.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-high p-4 rounded-xl">
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
              Masa atomica
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              {selectedElement.mass}
            </span>
          </div>
          <div className="bg-surface-container-high p-4 rounded-xl">
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
              Electronegatividad
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              {selectedElement.electro}
            </span>
          </div>
          <div className="bg-surface-container-high p-4 rounded-xl">
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
            Punto de fusión
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              {selectedElement.melt} K
            </span>
          </div>
          <div className="bg-surface-container-high p-4 rounded-xl">
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
            Punto de ebullición
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              {selectedElement.boil} K
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between border-b border-outline-variant/30 pb-2">
            <span className="text-on-surface-variant">Densidad</span>
            <span className="text-on-surface">{selectedElement.density} g/cm³</span>
          </div>
          <div className="flex justify-between border-b border-outline-variant/30 pb-2">
            <span className="text-on-surface-variant">Grupo</span>
            <span className="text-on-surface">{selectedElement.group}</span>
          </div>
          <div className="flex justify-between border-b border-outline-variant/30 pb-2">
            <span className="text-on-surface-variant">Periodo</span>
            <span className="text-on-surface">{selectedElement.period}</span>
          </div>
        </div>

       
      </div>
    </div>
  );
}
