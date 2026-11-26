export type ProgressState = 'pending' | 'completed' | 'skipped';
export interface ProgressEntry { state: ProgressState; updatedAt: string }
export interface TripProgress { version: 1; activities: Record<string, ProgressEntry>; monuments: Record<string, ProgressEntry>; restaurants: Record<string, ProgressEntry>; experiences: Record<string, ProgressEntry> }
export const progressKey = 'marruecos-2026:progress:v1';
const empty = (): TripProgress => ({version:1,activities:{},monuments:{},restaurants:{},experiences:{}});
export const readProgress = (): TripProgress => { try { const stored=JSON.parse(localStorage.getItem(progressKey)||'null'); return stored?.version===1 ? {...empty(),...stored,activities:stored.activities||{},monuments:stored.monuments||{},restaurants:stored.restaurants||{},experiences:stored.experiences||{}} : empty(); } catch { return empty(); } };
export const saveProgress = (progress: TripProgress) => { try { localStorage.setItem(progressKey,JSON.stringify(progress)); window.dispatchEvent(new CustomEvent('trip-progress-change',{detail:progress})); } catch {} };
export const setProgressState = (kind:keyof Omit<TripProgress,'version'>,id:string,state:ProgressState) => { const progress=readProgress(); if(state==='pending') delete progress[kind][id]; else progress[kind][id]={state,updatedAt:new Date().toISOString()}; saveProgress(progress); return progress; };
export const dayProgress = (ids:string[],progress=readProgress()) => { const states=ids.map(id=>progress.activities[id]?.state||'pending'); return {completed:states.filter(s=>s==='completed').length,skipped:states.filter(s=>s==='skipped').length,pending:states.filter(s=>s==='pending').length,total:ids.length,percent:ids.length?Math.round((states.filter(s=>s==='completed').length/ids.length)*100):0}; };
export const exportProgress = () => JSON.stringify(readProgress(),null,2);
export const importProgress = (raw:string) => { const value=JSON.parse(raw); if(value?.version!==1||!value.activities) throw new Error('Formato de progreso no válido'); saveProgress({...empty(),...value}); };
export const resetProgress = () => saveProgress(empty());
