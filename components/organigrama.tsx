import type { OrgNode } from '@/lib/organigrama'

function Nodo({ node }: { node: OrgNode }) {
  const variant = node.variant ?? 'cargo'
  const kids = node.children ?? []
  return (
    <div className="og-node">
      <div className={`og-box og-${variant}`}>{node.label}</div>
      {kids.length === 1 && (
        <div className="og-single">
          <Nodo node={kids[0]} />
        </div>
      )}
      {kids.length > 1 && (
        <div className="og-branches">
          {kids.map((k, i) => (
            <Nodo key={i} node={k} />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Dibuja un organigrama (árbol de nodos) en HTML/CSS. Los hijos de un nodo se
 * acomodan en un panel que hace wrap a varias filas, de modo que el organigrama
 * cabe completo en el ancho disponible sin scroll horizontal.
 */
export default function Organigrama({ root }: { root: OrgNode }) {
  return (
    <div className="og-root">
      <Nodo node={root} />

      <style>{`
        .og-root { width: 100%; }
        .og-node { display: flex; flex-direction: column; align-items: center; max-width: 100%; }

        .og-box {
          font-family: var(--font-lato), Arial, sans-serif;
          text-align: center;
          line-height: 1.3em;
          box-sizing: border-box;
          overflow-wrap: anywhere;
        }
        .og-raiz {
          background: #1B1A19; color: #fff;
          text-transform: uppercase; font-weight: 700;
          font-size: 12px; letter-spacing: 0.5px;
          padding: 12px 18px; max-width: 300px;
        }
        .og-organo {
          background: #4A535A; color: #fff;
          text-transform: uppercase; font-weight: 600;
          font-size: 10px; letter-spacing: 0.4px;
          padding: 8px 12px; max-width: 190px;
        }
        .og-cargo {
          background: #fff; color: #1B1A19; border: 1px solid #B8C0B8;
          font-size: 11px; font-weight: 400;
          padding: 8px 12px; max-width: 190px;
        }

        /* un solo hijo: cadena vertical con línea */
        .og-single {
          position: relative; margin-top: 16px; padding-top: 16px;
          display: flex; justify-content: center; max-width: 100%;
        }
        .og-single::before {
          content: ''; position: absolute; top: 0; left: 50%;
          width: 1px; height: 16px; background: #9AA1A6;
        }

        /* varios hijos: bajada + panel que hace wrap para caber en el ancho */
        .og-branches {
          position: relative; margin-top: 16px;
          display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start;
          gap: 18px 12px; padding: 18px 12px 12px;
          background: rgba(74, 83, 90, 0.04);
          border: 1px solid rgba(74, 83, 90, 0.14);
          max-width: 100%;
        }
        .og-branches::before {
          content: ''; position: absolute; top: -16px; left: 50%;
          width: 1px; height: 16px; background: #9AA1A6;
        }
      `}</style>
    </div>
  )
}
