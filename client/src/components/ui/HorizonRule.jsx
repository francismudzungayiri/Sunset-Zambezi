import './HorizonRule.css';

/**
 * The drowned-forest rule - this site's signature mark.
 *
 * When the Zambezi valley was dammed in 1958 the rising lake killed a mopane
 * forest, and the bare trunks still stand out of the water across Kariba. This
 * divider abstracts that: a waterline with a scatter of bleached trees on it.
 *
 * Drawn at a fixed viewBox and stretched with preserveAspectRatio="none".
 * Because the trunks are near-vertical, horizontal stretch is invisible on
 * them, and `vector-effect: non-scaling-stroke` keeps every line a true
 * hairline at any width.
 */

// x, height, and branch descriptors. Irregular on purpose - an even rhythm
// would read as a decorative border rather than a treeline.
const TREES = [
  { x: 38, h: 26, branches: [[-6, 8], [5, 11]] },
  { x: 94, h: 15, branches: [[4, 5]] },
  { x: 118, h: 34, branches: [[-7, 11], [6, 7], [-4, 19]] },
  { x: 297, h: 20, branches: [[5, 7]] },
  { x: 316, h: 29, branches: [[-6, 10], [7, 14]] },
  { x: 468, h: 13, branches: [] },
  { x: 638, h: 31, branches: [[-8, 12], [5, 16]] },
  { x: 698, h: 18, branches: [[4, 6]] },
  { x: 714, h: 24, branches: [[-5, 9]] },
  { x: 877, h: 36, branches: [[7, 13], [-6, 20], [4, 9]] },
  { x: 1008, h: 17, branches: [[-4, 6]] },
  { x: 1063, h: 27, branches: [[6, 10], [-5, 15]] },
  { x: 1148, h: 14, branches: [] },
];

const BASE_Y = 44;

export default function HorizonRule({ tone = 'light', className = '', ...rest }) {
  return (
    <div className={`horizon horizon--${tone} ${className}`.trim()} aria-hidden="true" {...rest}>
      <svg
        className="horizon__svg"
        viewBox={`0 0 1200 ${BASE_Y}`}
        preserveAspectRatio="none"
        focusable="false"
        role="presentation"
      >
        {/* the waterline */}
        <line
          x1="0"
          y1={BASE_Y - 0.5}
          x2="1200"
          y2={BASE_Y - 0.5}
          className="horizon__water"
          vectorEffect="non-scaling-stroke"
        />
        {TREES.map((tree) => {
          const topY = BASE_Y - tree.h;
          return (
            <g key={tree.x} className="horizon__tree">
              <line
                x1={tree.x}
                y1={BASE_Y}
                x2={tree.x}
                y2={topY}
                vectorEffect="non-scaling-stroke"
              />
              {tree.branches.map(([dx, up], i) => (
                <line
                  key={i}
                  x1={tree.x}
                  y1={topY + up}
                  x2={tree.x + dx}
                  y2={topY + up - Math.abs(dx) * 0.7}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
