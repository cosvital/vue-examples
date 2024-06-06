import Example01 from './01-BasicUsage.vue'
import Example02 from './02-CompositionOptionsAPI.vue'
import Example03 from './03-Lifecycle.vue'
import Example04 from './04-Variables.vue'
import Exercise05 from './05-ExerciseVariables.vue'
import Exercise06 from './06-ModifyVariables.vue'
import Exercise07 from './07-ExerciseModifyVariables.vue'
import Exercise08 from './08-DynamicAttributes.vue'
import Exercise09 from './09-ExerciseDynamicAttributes.vue'
import Exercise10 from './10-ComputedProperties.vue'

export const examples = {
  [1]: { component: Example01, description: 'Basic usage' },
  [2]: { component: Example02, description: 'Composition & Options API' },
  [3]: { component: Example03, description: 'Lifecycle' },
  [4]: { component: Example04, description: 'Variables' },
  [5]: { component: Exercise05, description: '* Exercise: Variables' },
  [6]: { component: Exercise06, description: 'Modifying variables' },
  [7]: { component: Exercise07, description: '* Exercise: Modifying variables' },
  [8]: { component: Exercise08, description: 'Dynamic attributes' },
  [9]: { component: Exercise09, description: '* Exercise: Dynamic attributes' },
  [10]: { component: Exercise10, description: 'Computed properties' }
}
