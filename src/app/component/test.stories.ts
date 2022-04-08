import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {TestComponent} from './test.component';

export default {
  title: 'Test component',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      declarations: [TestComponent]
    })
  ]
} as Meta;

const Template: Story<TestComponent> = () => ({
});

export const TestComponent1 = Template.bind({});

