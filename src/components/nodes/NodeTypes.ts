import { NodeTypes } from '../../types/FlowTypes';
import RichCard from './RichCard';
import CarouselCard from './CarouselCard';

export const nodeTypes = {
  [NodeTypes.RICH_CARD]: RichCard,
  [NodeTypes.CAROUSEL_CARD]: CarouselCard,
};