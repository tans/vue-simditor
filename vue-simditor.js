Vue.component('simditor', {
  props: ['value', 'id' , 'toolbar'],
  template: `
    <textarea
      v-bind:id="'simditor'+id"
      v-bind:value="value"
    ></textarea>
  `,
  data: function(){
    return {
      edited: false
    }
  },
  mounted:function(){
      var self = this;
      this.editor = new Simditor({
          toolbar: this.toolbar|| [],
          textarea: $('#simditor'+this.id)
      });
      this.editor.on('valuechanged', function(){
        self.edited = true;
        self.$emit('input', self.editor.getValue());
      });
  },
  watch:{
    value:function(a){
      if(!this.edited){
        this.editor.setValue(a);
      }
    }
  }
})