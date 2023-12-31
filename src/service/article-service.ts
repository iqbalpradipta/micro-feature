import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Article } from "../entities/articles";

export default new (class articleService {
  private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article);

  async get(): Promise<object | string> {
    try {
      const Article = await this.ArticleRepository.createQueryBuilder("article").getMany();

      return {
        messages: "Success get data",
        data: Article,
      };
    } catch (error) {
      throw error;
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
