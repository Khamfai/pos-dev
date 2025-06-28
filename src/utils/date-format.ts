import moment from 'moment';

export function formatDate(date: number | null, fm: string = 'DD-MM-YYYY') {
  return date != null ? moment(new Date(date)).format(fm) : '';
}
