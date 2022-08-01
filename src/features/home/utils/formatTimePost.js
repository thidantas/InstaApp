import {formatDistance} from 'date-fns';
import {ptBR} from 'date-fns/locale';

const formatTimePost = date => {
  const datePost = new Date(date);
  return formatDistance(new Date(), datePost, {
    locale: ptBR,
  });
};

export default formatTimePost;
