import source from '../../docs/importacion/guia-marruecos-2026.md?raw';

function inline(value: string) {
  return value
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/!\[[^\]]*\]\[[^\]]+\]/g, '')
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1 ↗</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function getImportedGuideHtml() {
  const lines = source.replace(/\r/g, '').split('\n');
  const output: string[] = [];
  let table: string[] = [];
  const flushTable = () => { if (table.length) { output.push(`<pre class="guide-table">${inline(table.join('\n'))}</pre>`); table = []; } };
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('|')) { table.push(line); continue; }
    flushTable();
    if (!line || line === '#') continue;
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) { const level = Math.min(heading[1]!.length + 1, 5); output.push(`<h${level}>${inline(heading[2]!.replace(/\s+\{#.+\}$/, ''))}</h${level}>`); continue; }
    const item = line.match(/^(?:[-*]|\d+\.)\s+(.*)$/);
    if (item) { output.push(`<p class="guide-item">${inline(item[1]!)}</p>`); continue; }
    output.push(`<p>${inline(line.replace(/\\([.|+])/g, '$1'))}</p>`);
  }
  flushTable();
  return output.join('\n');
}
