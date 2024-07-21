import { IntersectionType, PickType } from '@nestjs/mapped-types';
import Domain from '../entities/domain.entity';
import GORCAttribute from '../entities/gorc-attribute.entity';
import GORCElement from '../entities/gorc-element.entity';
import InterestGroup from '../entities/interest-group.entity';
import WorkingGroup from '../entities/working-group.entity';
import { Pathway } from '../entities/pathway.entity';
import ResourceType from '../entities/resource-type.entity';

class DomainDto extends PickType(Domain, ['identifier']) {}
class GorcAttributerDto extends PickType(GORCAttribute, ['identifier']) {}
class GorcElementDto extends PickType(GORCElement, ['identifier']) {}
class InterestGroupDto extends PickType(InterestGroup, ['identifier']) {}
class WorkingGroupDto extends PickType(WorkingGroup, ['identifier']) {}
class PathwayDto extends PickType(Pathway, ['identifier']) {}
class ResourceTypeDto extends PickType(ResourceType, ['identifier']) {}

export class CreateRdaAnnotationDto extends IntersectionType(
  DomainDto,
  GorcAttributerDto,
  GorcElementDto,
  InterestGroupDto,
  WorkingGroupDto,
  PathwayDto,
  ResourceTypeDto,
) {
  domains?: string;
  gorc_attributes?: string;
  gorc_elements?: string;
  interest_groups?: string;
  working_groups?: string;
  pathways?: string;
  resource_types?: string;

  constructor(
    domain: Domain,
    gorcAttribute: GORCAttribute,
    gorcElement: GORCElement,
    interestGroup: InterestGroup,
    workingGroup: WorkingGroup,
    pathway: Pathway,
    resourceType: ResourceType,
  ) {
    super();
    this.domains = domain.identifier;
    this.gorc_attributes = gorcAttribute.identifier;
    this.gorc_elements = gorcElement.identifier;
    this.interest_groups = interestGroup.identifier;
    this.working_groups = workingGroup.identifier;
    this.pathways = pathway.identifier;
    this.resource_types = resourceType.identifier;
  }
}
