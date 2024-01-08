import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Article } from "../entities/articles";
import { Users } from "../entities/users";


export default new (class articleService {
  private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article);
  
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
        messages: "Success get article",
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
            .createQueryBuilder('article')
            .leftJoinAndSelect("article.author", "users")
            .select([
              "article.id",
              "article.title",
              "users.roles",
              "article.date",
              "article.img",
            ])
            .where(`article.id = :id`, id)
            .getOneOrFail()

      return {
        messages: "success get article by Id",
        data: ArticleGetById,
      }
    } catch (error) {
      throw error
    }
  }

  async create(data: any): Promise<object | string> {
    try {

      const createArticle = await this.ArticleRepository
      .createQueryBuilder()
      .insert()
      .into(Article)
      .values(data)
      .execute();
      return {
        messages: "success create article",
        data: data,
      };
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async update(id: any, data: any): Promise<object> {
    try {
      const updateArticle = await this.ArticleRepository
      .createQueryBuilder()
      .update('article')
      .set(data)
      .where("id = :id", { id })
      .execute();
      return{
        messages: 'success update article',
        data: data
      }
    } catch (error) {
        throw error
    }
  }

  async delete(id: any): Promise<object> {
    try {
      const deleteArticle = await this.ArticleRepository
      .createQueryBuilder()
      .delete()
      .from(Article)
      .where("id = :id", { id })
      .execute();
      return{
        messages: 'success delete article',
        data: deleteArticle
      }
    } catch (error) {
        throw error
    }
  } 

})();
