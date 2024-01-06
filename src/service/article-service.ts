import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Article } from "../entities/articles";
import { Users } from "../entities/users";

export default new (class articleService {
  private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article);
  private readonly usersRepository: Repository<Users> = AppDataSource.getRepository(Users);

  async get(): Promise<object | string> {
    try {
      const GetArticle = await this.ArticleRepository.createQueryBuilder("article")
      .leftJoinAndSelect("article.author", "users")
      .select([
        "article.id",
        "article.title",
        "users.roles",
        "article.date",
        "article.img",
          ])
      .getMany();

      return {
        messages: "Success get data",
        data: GetArticle,
      };
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async getId(id: any): Promise<object> {
    try {
      const ArticleGetById = await this.ArticleRepository
            .createQueryBuilder()
            .select("article")
            .from(Article, "article")
            .where(`article.id = :id`, id)
            .getOneOrFail()

      return {
        messages: "success get data by Id",
        data: ArticleGetById,
      }
    } catch (error) {
      throw error
    }
  }

  async create(data: any): Promise<object> {
    try {
      const author = await this.usersRepository.findOne({where: { id: data.id }})

      const createArticle = await this.ArticleRepository
      .createQueryBuilder()
      .insert()
      .into(Article)
      .values({title: data.title, img: data.img, description: data.description, author: author})
      .execute();
      return {
        messages: "success",
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }
})();
