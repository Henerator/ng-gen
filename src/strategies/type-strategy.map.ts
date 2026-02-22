import { ComponentStrategy } from './component.strategy';
import { DirectiveStrategy } from './directive.strategy';
import { GenerateStrategy } from './generate-strategy.interface';
import { ServiceStrategy } from './service.strategy';

export const typeStrategyMap = new Map<string, GenerateStrategy>([
  ['component', new ComponentStrategy()],
  ['service', new ServiceStrategy()],
  ['directive', new DirectiveStrategy()],
]);
