using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nvoi.Frontend.Controllers
{
    public class MerchantController : Controller
    {
        // GET: Mrechant
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddMerchant()
        {
            return View();
        }
    }
}