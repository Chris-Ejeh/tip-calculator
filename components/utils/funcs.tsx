import _ from 'underscore';

export const split = (str: string, n: number) => {
  let numberOfSegments = Math.ceil(_.size(str) / n);
  let segments = _.map(_.range(numberOfSegments), (segmentIndex) =>
    str.substr(segmentIndex * n, n)
  );
  return segments.join('\n');
};
