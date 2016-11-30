  function PostsShowController(PostFactory, $stateParams, $state, Auth) {
        var vm = this;

        //callable methods on the vm
        vm.getPost = getPost;
        vm.updatePost = updatePost;
        vm.destroyPost = destroyPost;
        vm.signedIn = Auth.isAuthenticated();
        vm.getCurrentUser = getCurrentUser;

        //instantiated info
        activate();

        //defined methods on the vm        
        function activate() {
          getPost($stateParams.id);
          getCurrentUser();
        };

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser);
        }

        function setCurrentUser(user) {
            console.log(user);
            return vm.user = user;
        }

        function getPost(id) {
            return PostFactory.getPost(id)
                       .then(setPost);
        };

        function updatePost() {
            return PostFactory.updatePost(vm.post)
                       .then(showPost);
        };

        function destroyPost(id) {
            return PostFactory.destroyPost(id)
                       .then(showPosts);
        };

        function setPost(data) {
            return vm.post = data;
        };

        function showPost(id) {
            $state.go('home.post', { id: post.id });
        };

        function showPosts() {
            $state.go('home.discussion');
        };
    };

    PostsShowController.$inject = ['PostFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('app')
        .controller('PostsShowController', PostsShowController);