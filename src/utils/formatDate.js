import moment from 'moment';

export function converTime(time) {
    return moment(time).format('ll');
}
