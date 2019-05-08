Vue.component('simditor', {
    props: ['value', 'id' ,  'toolbar'],
    template: `
      <textarea
        v-bind:id="'simditor'+id"
        v-bind:value="value"
        v-on:input="onInput"
      ></textarea>
    `,
    mounted:function(){
        var self = this;
        this.editor = new Simditor({
            toolbar: this.toolbar|| [],
            textarea: $('#simditor'+this.id)
        });
        this.editor.on('valuechanged', function(){
            self.value = self.editor.getValue();
        });
    }
  })