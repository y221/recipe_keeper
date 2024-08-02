import { fetchRecipesData } from '../lib/fetchRecipesData';
import RecipeGrid from '../components/ImageGrid';
import Header from '../components/Header';

const HomePage = async () => {
  const recipes = await fetchRecipesData();

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
  );
};

export default HomePage;