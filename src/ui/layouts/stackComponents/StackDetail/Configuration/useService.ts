import { useSelector } from 'react-redux';
import {
  flavorSelectors,
  stackComponentSelectors,
} from '../../../../../redux/selectors';
import { StackComponent } from '../../../../../api/types';

interface ServiceInterface {
  stackComponent: any;
  flavor: any;
}

export const useService = ({ stackId }: { stackId: TId }): ServiceInterface => {
  const stackComponent: StackComponent = useSelector(
    stackComponentSelectors.stackComponentForId(stackId),
  );

  const flavors = useSelector(flavorSelectors.myFlavorsAll);

  const flavor: any = flavors[0];

  return { stackComponent, flavor };
};
