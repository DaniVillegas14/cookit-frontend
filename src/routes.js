import Home from 'views/home';
import New from 'views/Recipes/New/new';
import Recipe from 'views/Recipes/recipe';
import Search from 'views/Recipes/Search/search';
import User from 'views/user';
import EditUser from 'views/EditUser/edit-user';
import CommentList from 'views/Recipes/CommentList/comment-list';
import FavoritesPage from 'views/Favorites/favorites-pages';
import CategoryFavoritesPage from 'views/CategoryFavorites/category-favorites-page';
import EditRecipe from 'views/EditRecipe/edit-recipe';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/recipes/new', exact: true, component: New },
  { path: '/recipes/:id', exact: true, component: Recipe },
  { path: '/recipes/:id/comments', exact: true, component: CommentList },
  { path: '/recipes', exact: true, component: Search },
  { path: '/profile', exact: true, component: User },
  { path: '/favorites', exact: true, component: FavoritesPage },
  {
    path: '/favorites/category/:idCategory',
    exact: true,
    component: CategoryFavoritesPage
  },
  { path: '/profile/edit', exact: true, component: EditUser },
  { path: '/recipes/edit/:idRecipe', exact: true, component: EditRecipe }
];

export default routes;
