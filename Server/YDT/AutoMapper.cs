using AutoMapper;
using Entities;
using DTOs;

namespace YDT
{
    public class AutoMapper:Profile
    {
        public AutoMapper()
        {
            CreateMap<Rav, RavDTO>();
            CreateMap<Shiur, ShiurDTO>();
            CreateMap<Topic, TopicDTO>();
        }
    }
}
