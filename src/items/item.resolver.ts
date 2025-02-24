import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => [Item])
  items() {
    return this.itemService.getAllItems();
  }

  @Mutation(() => Item)
  createItem(@Args('name') name: string, @Args('description') description: string) {
    return this.itemService.createItem(name, description);
  }
}
