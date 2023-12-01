const Joi = require("joi");
const ResponseHandler = require("../middlewares/res-handler");

const validateUser = (req, res, next) => {
    const userValidationSchema = Joi.object({
        name: Joi.string().max(10).pattern(/^[A-Za-z가-힣]+$/).required(),
        email: Joi.string().email().required(),
        password: Joi.string().max(10).regex(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        role: Joi.string().valid("Admin", "User"),
        nickname: Joi.string().max(10).pattern(/^[A-Za-z가-힣]+$/).required(),
        phone: Joi.string().pattern(/^\d{3}-\d{4}-\d{4}$/),
    });

    const { error } = userValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

const validateProduct = (req, res, next) => {
    const productValidationSchema = Joi.object({
        name: Joi.string().required(),
        image_url: Joi.string().required(),
        category: Joi.string().valid("에스프레소", "논커피", "스무디", "티", "에이드").required(),
        size: Joi.string().valid("없음", "Tall", "Large").default("없음"),
        temp: Joi.string().valid("없음", "Ice", "Hot").default("없음"),
        info: Joi.string(),
        kcal: Joi.number().required(),
        price: Joi.number().required(),
        recipe: Joi.string(),
    });

    const { error } = productValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

const validateOrderOption = (req, res, next) => {
    const orderOptionValidationSchema = Joi.object({
        shot: Joi.array().items(
            Joi.object({
                price: Joi.number().required(),
            })
        ),
        drizzle: Joi.array().items(
            Joi.object({
                name: Joi.string(),
                price: Joi.number().required(),
            })
        ),
        iceAmount: Joi.array().items(
            Joi.object({
                name: Joi.string(),
                price: Joi.number().required(),
            })
        ),
        whipping: Joi.array().items(
            Joi.object({
                name: Joi.string(),
                price: Joi.number().required(),
            })
        ),
        syrup: Joi.array().items(
            Joi.object({
                name: Joi.string(),
                price: Joi.number().required(),
            })
        ),
        milk: Joi.array().items(
            Joi.object({
                name: Joi.string(),
                price: Joi.number().required(),
            })
        ),
    });

    const { error } = orderOptionValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

const validateOrder = (req, res, next) => {
    const orderValidationSchema = Joi.object({
        user: Joi.string().required(),
        orderDetail: Joi.array().items(
            Joi.object({
                name: Joi.string().required(),
                options: Joi.string(),
                price: Joi.number().required(),
            })
        ),
        date: Joi.date(),
        status: Joi.string().valid(
            "주문취소-재료소진",
            "주문취소-고객요청",
            "주문취소-가게사정",
            "주문완료",
            "제조완료"
        ).required(),
        totalPrice: Joi.number().required(),
        nickname: Joi.string().required(),
        request: Joi.string(),
        packagingOption: Joi.string().valid("매장식사", "방문포장").required(),
    });

    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

const validateLike = (req, res, next) => {
    const likeValidationSchema = Joi.object({
        board: Joi.string().required(),
        user: Joi.string().required(),
    });

    const { error } = likeValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

const validateComment = (req, res, next) => {
    const commentValidationSchema = Joi.object({
        board: Joi.string().required(),
        author: Joi.string().required(),
        nickname: Joi.string().required(),
        comment: Joi.string().required(),
    });

    const { error } = commentValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

const validateBoard = (req, res, next) => {
    const boardValidationSchema = Joi.object({
        user: Joi.string().required(),
        nickname: Joi.string().required(),
        category: Joi.string().valid("에스프레소", "논커피", "스무디", "티", "에이드").required(),
        post: Joi.string().required(),
        image: Joi.array().items(Joi.string()).max(4),
        tags: Joi.array().items(Joi.string()),
    });

    const { error } = boardValidationSchema.validate(req.body);
    if (error) {
        return ResponseHandler.respondWithBadRequest(res, error.message);
    }
    next();
};

module.exports = {
    validateUser,
    validateProduct,
    validateOrderOption,
    validateOrder,
    validateLike,
    validateComment,
    validateBoard
};
