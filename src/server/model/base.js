class BaseModel {
  constructor({
    model,
    opts = {
      logging: sql => {
        console.info(sql);
      }
    }
  }) {
    this.m = model;
    this.opts = opts;
  }

  async findList(opts) {
    return this.m.findAll({ ...this.opts, ...opts });
  }

  async count(opts) {
    return this.m.count({ ...this.opts, ...opts });
  }

  async findPage(opts) {
    return this.m.findAndCountAll({ ...this.opts, ...opts });
  }

  async findById(id) {
    return this.m.findByPk(id);
  }

  async findOne(opts) {
    return this.m.findOne({ ...this.opts, ...opts });
  }

  async insertWhenNotFound(opts) {
    return this.m.findCreateFind({ ...this.opts, ...opts });
  }

  async update(values, opts) {
    return this.m.update(values, { ...this.opts, ...opts });
  }

  async createOrUpdate(values, opts) {
    return this.m.update(values, { ...this.opts, ...opts });
  }

  async init(attrs, opts) {
    return this.m.init(attrs, { ...this.opts, ...opts });
  }

  async create(values, opts) {
    return this.m.create(values, { ...this.opts, ...opts });
  }
  async destroy(opts) {
    return this.m.destroy({ ...this.opts, ...opts });
  }
}

module.exports = BaseModel;
