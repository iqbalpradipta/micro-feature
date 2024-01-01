import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Article } from "../entities/articles";

export default new (class articleService {
  private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article);

  async get(): Promise<object | string> {
    try {
      const GetArticle = await this.ArticleRepository.createQueryBuilder("article").getMany();

      return {
        messages: "Success get data",
        data: GetArticle,
      };
    } catch (error) {
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
            .getOne()

      return {
        messages: "success get data by Id",
        data: ArticleGetById,
      }
    } catch (error) {
      
    }
  }

  async create(data: any): Promise<object> {
    try {
      const createArticle = await this.ArticleRepository
      .createQueryBuilder()
      .insert()
      .into(Article)
      .values(data)
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
