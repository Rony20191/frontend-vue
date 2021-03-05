import UserCard from '@/views/list-view/components/UserCard.vue';
import UserDialog from '@/views/list-view/components/UserDialog.vue';
import { mount,createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
test("Teste usuário type props", ()=>{
    let localVue;
    let vuetify;
    
    localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
    vuetify = new Vuetify();
   const wrapper = mount(UserCard, {
        localVue,
        vuetify,
        propsData: {
            ativo: true,
            nome: 'Roniere',
            idade: 17,
            email: 'roniere@gmail.com',
            telefone: '',
            avatar: ''   } });
    expect(wrapper.props().ativo).toBe(true);
    expect(wrapper.props().nome).toBe('Roniere');
    expect(wrapper.props().idade).toBe(17);
    expect(wrapper.props().email).toBe('roniere@gmail.com');
    expect(wrapper.props().telefone).toBe('');
    expect(wrapper.props().avatar).toBe('');

  //  expect(wrapper.find('[data-testid="edit-button"]').exists()).toBe(true);

})


const users = [
    {
      ativo: true,
      nome: 'Roniere',
      idade: 17,
      email: 'roniere@gmail.com',
      telefone: '65999402889',
      avatar: '' 
    },
    {
      ativo: true,
      nome: 'Rose',
      idade: 30,
      email: 'rose@gmail.com',
      telefone: '65999402889',
      avatar: '' 
    },

];




describe('Verificar a atualização das props do card',()=>{
  test('Teste uma lista de usuarios',()=>{
    users.forEach(item => {
      let localVue;
      let vuetify;
      
      localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
      vuetify = new Vuetify();
     const wrapper = mount(UserCard, {
          localVue,
          vuetify,
          propsData: {
              ativo: item.ativo,
              nome: item.nome,
              idade: item.idade,
              email: item.email,
              telefone: item.telefone,
              avatar: item.avatar  } });
      expect(wrapper.props().ativo).toBe(item.ativo);
      expect(wrapper.props().nome).toBe(item.nome);
      expect(wrapper.props().idade).toBe(item.idade);
      expect(wrapper.props().email).toBe(item.email);
      expect(wrapper.props().telefone).toBe(item.telefone);
      expect(wrapper.props().avatar).toBe(item.avatar);
    })

  })

  test('Testar a edição de um usuario',async()=>{
    users.forEach(async (item) => {
      let localVue;
      let vuetify;
      
      localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
      vuetify = new Vuetify();
     const wrapper = mount(UserCard, {
          localVue,
          vuetify,
          propsData: {
              ativo: item.ativo,
              nome: item.nome,
              idade: item.idade,
              email: item.email,
              telefone: item.telefone,
              avatar: item.avatar  } });

      const button = wrapper.find('[id="edit-button"]');
      await button.trigger('click');

      const wrapper2 = mount(UserDialog, {
        localVue,
        vuetify
      })
      
      wrapper2.vm.show(item,true);
      
      expect(item.nome).toBe(wrapper2.vm.usuario.nome);
    })

  })
})