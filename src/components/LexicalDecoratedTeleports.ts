import { defineComponent, h } from 'vue'
import { useDecorators, useEditor } from '../composables'

export default defineComponent({
  name: 'LexicalDecoratedTeleports',
  setup() {
    const editor = useEditor()
    const decorators = useDecorators(editor)

    return () => h('div', decorators.value)
  },
})
