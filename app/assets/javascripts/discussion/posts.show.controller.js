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
          getPost($stateParams.postId);
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
            if (vm.signedIn && vm.currentUser) {
                return PostFactory.updatePost(vm.post)
                       .then(showPost);
            } else {
                alert("You need to sign in to edit a Post.");
                $state.go('home.login')
            }
        };

        function destroyPost(id) {
            return PostFactory.destroyPost(id)
                       .then(showPosts);
        };

        function setPost(data) {
            return vm.post = data;
        };

        function showPost(data) {
            $state.go('home.discussion.post', { postId: data.id });
        };

        function showPosts() {
            $state.go('home.discussion');
        };
    };

    PostsShowController.$inject = ['PostFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('app')
        .controller('PostsShowController', PostsShowController);