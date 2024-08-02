import { fetchRecipesData } from '../../../lib/fetchRecipesData';
import Header from '../../../components/Header';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { FaYoutube } from 'react-icons/fa'; // YouTubeアイコンのインポート
import { markdownComponents } from '../../../components/markdownComponents';

interface RecipePageProps {
  params: {
    id: string;
  };
}

const RecipePage = async ({ params }: RecipePageProps) => {

  const recipes = await fetchRecipesData();
  const recipe = recipes.find(recipe => recipe.id === params.id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  console.log(markdownComponents);

  return (
    <div>
      <Header />
      <div className="bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col">
              <img
                src={recipe.imageUrl}
                alt={recipe.menuName}
                className="w-full rounded-lg shadow-md mb-4"
              />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h1 className="text-3xl font-bold">{recipe.menuName}</h1>
                  <p className="text-sm text-gray-500">@{recipe.channelName}</p>
                </div>
                <a
                  href={recipe.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-600"
                >
                  <FaYoutube size={24} />
                  YouTubeで見る
                </a>
              </div>
              {recipe.isRecommended && (
                <p className="text-sm text-green-600 mb-4">おすすめレシピ</p>
              )}
              <h3 className="text-lg font-semibold mb-1 text-left">メモ</h3>
              <p className="text-base text-gray-600 mb-4 text-left">{recipe.comment}</p>
              <div className="prose w-full text-left">
              <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={markdownComponents}
                >
                  {recipe.recipe}
                </ReactMarkdown>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;